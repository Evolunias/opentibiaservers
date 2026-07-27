import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-nto-star-server');
}

export default function PvpEnforcedNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-nto-star-server" />;
}
