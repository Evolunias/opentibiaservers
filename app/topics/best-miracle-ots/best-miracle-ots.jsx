import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-ots');
}

export default function BestMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-ots" />;
}
