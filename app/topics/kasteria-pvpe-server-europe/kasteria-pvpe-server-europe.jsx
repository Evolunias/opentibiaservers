import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-europe');
}

export default function KasteriaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-europe" />;
}
