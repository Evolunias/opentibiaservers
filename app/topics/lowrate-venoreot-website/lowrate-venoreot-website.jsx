import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-website');
}

export default function LowrateVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-website" />;
}
