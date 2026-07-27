import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-ot-server');
}

export default function BestOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-ot-server" />;
}
