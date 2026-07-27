import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-mexico');
}

export default function TibijkaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-mexico" />;
}
