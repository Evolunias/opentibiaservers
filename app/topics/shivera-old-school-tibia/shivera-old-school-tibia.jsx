import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-old-school-tibia');
}

export default function ShiveraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="shivera-old-school-tibia" />;
}
