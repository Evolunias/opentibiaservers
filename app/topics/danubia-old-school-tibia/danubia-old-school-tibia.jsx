import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-old-school-tibia');
}

export default function DanubiaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="danubia-old-school-tibia" />;
}
