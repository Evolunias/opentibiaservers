import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-client');
}

export default function PopularMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-client" />;
}
