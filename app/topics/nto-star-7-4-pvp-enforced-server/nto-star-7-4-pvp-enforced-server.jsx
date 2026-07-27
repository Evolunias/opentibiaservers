import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-pvp-enforced-server');
}

export default function NtoStar74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-pvp-enforced-server" />;
}
