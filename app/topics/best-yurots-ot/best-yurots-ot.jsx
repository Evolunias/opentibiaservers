import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-ot');
}

export default function BestYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-ot" />;
}
