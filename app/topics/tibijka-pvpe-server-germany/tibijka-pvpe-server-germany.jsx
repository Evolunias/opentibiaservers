import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-germany');
}

export default function TibijkaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-germany" />;
}
