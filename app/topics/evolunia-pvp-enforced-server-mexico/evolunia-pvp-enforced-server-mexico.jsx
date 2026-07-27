import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-mexico');
}

export default function EvoluniaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-mexico" />;
}
