import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-ots');
}

export default function BestMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-ots" />;
}
