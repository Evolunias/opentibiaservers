import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-latin-america');
}

export default function EvoluniaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-latin-america" />;
}
