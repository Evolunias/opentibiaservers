import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-ot');
}

export default function BestXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-ot" />;
}
