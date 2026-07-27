import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-pvp-enforced-server');
}

export default function NtoStar12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-pvp-enforced-server" />;
}
