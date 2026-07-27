import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-usa');
}

export default function TibijkaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-usa" />;
}
