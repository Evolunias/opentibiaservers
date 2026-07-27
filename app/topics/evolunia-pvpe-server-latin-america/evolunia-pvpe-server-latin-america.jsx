import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-latin-america');
}

export default function EvoluniaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-latin-america" />;
}
