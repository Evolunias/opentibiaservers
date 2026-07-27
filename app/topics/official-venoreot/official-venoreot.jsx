import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot');
}

export default function OfficialVenoreotKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot" />;
}
