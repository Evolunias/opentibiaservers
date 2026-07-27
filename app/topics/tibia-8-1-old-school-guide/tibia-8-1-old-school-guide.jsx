import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-guide');
}

export default function Tibia81OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-guide" />;
}
