import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-guide');
}

export default function Tibia13FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-guide" />;
}
