import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-ots');
}

export default function BestXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-ots" />;
}
