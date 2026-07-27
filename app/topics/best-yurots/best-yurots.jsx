import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots');
}

export default function BestYurotsKeywordPage() {
  return <StaticKeywordPage slug="best-yurots" />;
}
