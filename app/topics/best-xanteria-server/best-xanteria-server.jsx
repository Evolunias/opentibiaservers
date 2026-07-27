import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-server');
}

export default function BestXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-server" />;
}
