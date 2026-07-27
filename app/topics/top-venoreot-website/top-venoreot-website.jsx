import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-website');
}

export default function TopVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-website" />;
}
