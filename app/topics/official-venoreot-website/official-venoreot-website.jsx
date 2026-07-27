import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-website');
}

export default function OfficialVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-website" />;
}
