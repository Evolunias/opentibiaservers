import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-private-server');
}

export default function BestCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-private-server" />;
}
