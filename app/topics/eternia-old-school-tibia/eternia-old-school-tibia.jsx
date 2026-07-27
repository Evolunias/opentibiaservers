import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-old-school-tibia');
}

export default function EterniaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="eternia-old-school-tibia" />;
}
