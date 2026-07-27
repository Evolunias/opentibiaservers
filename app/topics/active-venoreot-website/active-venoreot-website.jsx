import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-website');
}

export default function ActiveVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-website" />;
}
