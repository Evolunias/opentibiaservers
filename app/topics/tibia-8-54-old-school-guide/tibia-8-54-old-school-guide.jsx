import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-guide');
}

export default function Tibia854OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-guide" />;
}
