import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-1-pvp-enforced-server');
}

export default function NtoStar71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-1-pvp-enforced-server" />;
}
