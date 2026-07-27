import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-private-server');
}

export default function PopularMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-private-server" />;
}
