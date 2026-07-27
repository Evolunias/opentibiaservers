import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot');
}

export default function CurrentVenoreotKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot" />;
}
