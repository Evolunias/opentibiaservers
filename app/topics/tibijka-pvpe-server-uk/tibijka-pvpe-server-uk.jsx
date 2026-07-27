import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-uk');
}

export default function TibijkaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-uk" />;
}
