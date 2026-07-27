import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-pvp-enforced-server');
}

export default function NtoStar100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-pvp-enforced-server" />;
}
