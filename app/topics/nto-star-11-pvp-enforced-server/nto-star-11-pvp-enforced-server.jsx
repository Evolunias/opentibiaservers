import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-pvp-enforced-server');
}

export default function NtoStar11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-pvp-enforced-server" />;
}
