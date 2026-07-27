import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-ots');
}

export default function HighrateAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-ots" />;
}
