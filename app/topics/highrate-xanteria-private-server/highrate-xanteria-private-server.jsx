import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-private-server');
}

export default function HighrateXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-private-server" />;
}
