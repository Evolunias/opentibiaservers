import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-client');
}

export default function BestXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-client" />;
}
