import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-france');
}

export default function EvoleraPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-france" />;
}
