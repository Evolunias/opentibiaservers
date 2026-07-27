import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-website');
}

export default function CurrentVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-website" />;
}
