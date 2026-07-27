import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-guide');
}

export default function Tibia81FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-guide" />;
}
