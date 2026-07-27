import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-usa');
}

export default function TibiamePvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-usa" />;
}
