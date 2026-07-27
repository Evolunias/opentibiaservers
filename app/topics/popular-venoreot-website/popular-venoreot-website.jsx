import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-website');
}

export default function PopularVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-website" />;
}
