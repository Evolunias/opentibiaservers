import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-website');
}

export default function HighrateVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-website" />;
}
