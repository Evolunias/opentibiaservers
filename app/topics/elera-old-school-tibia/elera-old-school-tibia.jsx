import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-old-school-tibia');
}

export default function EleraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="elera-old-school-tibia" />;
}
