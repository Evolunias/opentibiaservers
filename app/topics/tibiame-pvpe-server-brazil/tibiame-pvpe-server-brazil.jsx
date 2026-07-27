import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-brazil');
}

export default function TibiamePvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-brazil" />;
}
