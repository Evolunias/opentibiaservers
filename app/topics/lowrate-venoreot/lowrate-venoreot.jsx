import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot');
}

export default function LowrateVenoreotKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot" />;
}
