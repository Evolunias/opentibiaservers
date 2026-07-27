import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-argentina');
}

export default function EvoluniaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-argentina" />;
}
