import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-website');
}

export default function BestVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-website" />;
}
