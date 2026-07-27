import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-poland');
}

export default function TibiamePvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-poland" />;
}
