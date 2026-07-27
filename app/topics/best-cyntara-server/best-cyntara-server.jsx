import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-server');
}

export default function BestCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-server" />;
}
