import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-france');
}

export default function EvoluniaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-france" />;
}
