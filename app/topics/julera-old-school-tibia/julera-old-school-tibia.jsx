import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-old-school-tibia');
}

export default function JuleraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="julera-old-school-tibia" />;
}
