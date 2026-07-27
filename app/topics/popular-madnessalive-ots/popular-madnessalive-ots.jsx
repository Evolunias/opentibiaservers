import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-ots');
}

export default function PopularMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-ots" />;
}
