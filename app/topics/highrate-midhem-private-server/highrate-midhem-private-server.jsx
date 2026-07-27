import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-private-server');
}

export default function HighrateMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-private-server" />;
}
