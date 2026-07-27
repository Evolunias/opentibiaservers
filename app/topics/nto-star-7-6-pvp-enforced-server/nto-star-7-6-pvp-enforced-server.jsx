import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-pvp-enforced-server');
}

export default function NtoStar76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-pvp-enforced-server" />;
}
