import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibianus-server');
}

export default function PvpEnforcedTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibianus-server" />;
}
