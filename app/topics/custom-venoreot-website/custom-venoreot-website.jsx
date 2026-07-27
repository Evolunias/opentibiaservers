import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-website');
}

export default function CustomVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-website" />;
}
