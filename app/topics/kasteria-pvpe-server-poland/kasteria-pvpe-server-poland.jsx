import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-poland');
}

export default function KasteriaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-poland" />;
}
