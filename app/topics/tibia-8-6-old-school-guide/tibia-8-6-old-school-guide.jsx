import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-old-school-guide');
}

export default function Tibia86OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-old-school-guide" />;
}
