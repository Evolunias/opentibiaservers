import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-ots');
}

export default function PopularCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-ots" />;
}
