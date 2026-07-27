import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-germany');
}

export default function TibiamePvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-germany" />;
}
