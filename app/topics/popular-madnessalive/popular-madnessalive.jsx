import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive');
}

export default function PopularMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive" />;
}
