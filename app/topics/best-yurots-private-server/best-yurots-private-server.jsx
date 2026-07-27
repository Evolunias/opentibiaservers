import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-private-server');
}

export default function BestYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-private-server" />;
}
