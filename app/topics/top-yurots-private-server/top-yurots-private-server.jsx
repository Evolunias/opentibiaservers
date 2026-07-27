import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-private-server');
}

export default function TopYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-private-server" />;
}
