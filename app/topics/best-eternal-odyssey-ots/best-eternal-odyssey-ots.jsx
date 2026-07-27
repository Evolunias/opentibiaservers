import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-ots');
}

export default function BestEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-ots" />;
}
