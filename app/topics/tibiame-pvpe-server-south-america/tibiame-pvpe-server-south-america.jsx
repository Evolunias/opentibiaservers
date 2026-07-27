import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-south-america');
}

export default function TibiamePvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-south-america" />;
}
