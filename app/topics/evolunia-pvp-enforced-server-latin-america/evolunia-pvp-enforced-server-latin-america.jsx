import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-latin-america');
}

export default function EvoluniaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-latin-america" />;
}
