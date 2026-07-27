import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot');
}

export default function HighrateVenoreotKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot" />;
}
