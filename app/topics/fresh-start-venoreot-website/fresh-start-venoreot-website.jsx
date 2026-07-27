import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-website');
}

export default function FreshStartVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-website" />;
}
