import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-login');
}

export default function OfficialVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-login" />;
}
