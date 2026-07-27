import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-pvp-enforced-server');
}

export default function Medivia15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-pvp-enforced-server" />;
}
