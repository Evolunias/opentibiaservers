import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-ots');
}

export default function BestTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-ots" />;
}
