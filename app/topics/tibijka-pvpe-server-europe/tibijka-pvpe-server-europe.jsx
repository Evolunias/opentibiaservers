import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-europe');
}

export default function TibijkaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-europe" />;
}
