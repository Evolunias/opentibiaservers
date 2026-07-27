import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-6-pvp-enforced-server');
}

export default function NtoStar86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-6-pvp-enforced-server" />;
}
