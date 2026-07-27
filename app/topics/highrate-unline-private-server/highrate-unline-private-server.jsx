import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-private-server');
}

export default function HighrateUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-private-server" />;
}
