import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-europe');
}

export default function TibiamePvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-europe" />;
}
