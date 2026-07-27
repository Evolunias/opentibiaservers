import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-kasteria-server');
}

export default function PvpEnforcedKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-kasteria-server" />;
}
