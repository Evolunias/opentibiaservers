import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-argentina');
}

export default function TibijkaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-argentina" />;
}
