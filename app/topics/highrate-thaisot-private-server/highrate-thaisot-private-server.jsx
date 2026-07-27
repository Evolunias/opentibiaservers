import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-private-server');
}

export default function HighrateThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-private-server" />;
}
