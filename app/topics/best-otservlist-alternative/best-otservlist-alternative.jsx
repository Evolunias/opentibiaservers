import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otservlist-alternative');
}

export default function BestOtservlistAlternativeKeywordPage() {
  return <StaticKeywordPage slug="best-otservlist-alternative" />;
}
