import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-ot');
}

export default function BestMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-ot" />;
}
