import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-brazil');
}

export default function TibijkaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-brazil" />;
}
