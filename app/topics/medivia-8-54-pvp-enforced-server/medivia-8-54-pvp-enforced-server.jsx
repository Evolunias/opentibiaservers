import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-pvp-enforced-server');
}

export default function Medivia854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-pvp-enforced-server" />;
}
