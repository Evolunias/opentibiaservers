import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-ot-server');
}

export default function BestCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-ot-server" />;
}
