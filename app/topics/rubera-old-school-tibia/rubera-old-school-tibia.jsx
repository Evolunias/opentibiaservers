import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-old-school-tibia');
}

export default function RuberaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="rubera-old-school-tibia" />;
}
