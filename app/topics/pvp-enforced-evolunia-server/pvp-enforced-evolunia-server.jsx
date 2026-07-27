import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-evolunia-server');
}

export default function PvpEnforcedEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-evolunia-server" />;
}
