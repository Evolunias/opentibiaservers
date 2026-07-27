import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-old-school-guide');
}

export default function Tibia71OldSchoolGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-old-school-guide" />;
}
