import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-old-school-tibia');
}

export default function AnticaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="antica-old-school-tibia" />;
}
