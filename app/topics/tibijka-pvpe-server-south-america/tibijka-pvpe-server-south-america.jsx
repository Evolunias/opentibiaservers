import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-south-america');
}

export default function TibijkaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-south-america" />;
}
