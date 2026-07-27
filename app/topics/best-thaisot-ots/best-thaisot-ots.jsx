import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-ots');
}

export default function BestThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-ots" />;
}
