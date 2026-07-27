import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-pvp-enforced-server');
}

export default function NtoStar14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-pvp-enforced-server" />;
}
