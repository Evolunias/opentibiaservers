import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-old-school-guide');
}

export default function Tibia772OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-old-school-guide" />;
}
