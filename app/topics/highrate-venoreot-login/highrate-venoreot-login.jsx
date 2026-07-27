import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-login');
}

export default function HighrateVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-login" />;
}
