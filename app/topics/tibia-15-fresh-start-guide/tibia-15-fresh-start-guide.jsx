import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-guide');
}

export default function Tibia15FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-guide" />;
}
