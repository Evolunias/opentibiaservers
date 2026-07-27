import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-neprenia-server');
}

export default function PvpEnforcedNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-neprenia-server" />;
}
