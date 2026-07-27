import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-old-school-tibia');
}

export default function AsteraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="astera-old-school-tibia" />;
}
