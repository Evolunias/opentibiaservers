import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-private-server');
}

export default function HighrateEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-private-server" />;
}
