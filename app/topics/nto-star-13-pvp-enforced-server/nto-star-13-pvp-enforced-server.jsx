import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-pvp-enforced-server');
}

export default function NtoStar13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-pvp-enforced-server" />;
}
