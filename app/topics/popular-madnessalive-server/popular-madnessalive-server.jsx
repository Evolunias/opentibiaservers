import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-server');
}

export default function PopularMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-server" />;
}
