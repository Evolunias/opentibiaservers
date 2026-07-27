import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-private-server');
}

export default function HighrateVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-private-server" />;
}
