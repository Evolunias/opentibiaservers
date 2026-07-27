import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-ots');
}

export default function BestYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-ots" />;
}
