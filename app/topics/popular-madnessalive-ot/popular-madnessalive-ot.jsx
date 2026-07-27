import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-ot');
}

export default function PopularMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-ot" />;
}
