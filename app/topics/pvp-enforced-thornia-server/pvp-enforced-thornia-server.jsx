import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-thornia-server');
}

export default function PvpEnforcedThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-thornia-server" />;
}
