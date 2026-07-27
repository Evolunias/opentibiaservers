import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-ots');
}

export default function BestCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-ots" />;
}
