import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-classick-drakoria-server');
}

export default function PvpEnforcedClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-classick-drakoria-server" />;
}
