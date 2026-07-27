import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-fresh-start-guide');
}

export default function Tibia772FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-fresh-start-guide" />;
}
