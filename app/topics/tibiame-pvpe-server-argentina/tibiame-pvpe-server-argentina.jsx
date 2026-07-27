import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-argentina');
}

export default function TibiamePvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-argentina" />;
}
