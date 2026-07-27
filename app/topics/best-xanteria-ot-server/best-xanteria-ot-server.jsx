import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-ot-server');
}

export default function BestXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-ot-server" />;
}
