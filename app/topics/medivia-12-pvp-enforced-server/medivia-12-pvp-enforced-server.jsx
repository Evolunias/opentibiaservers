import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-pvp-enforced-server');
}

export default function Medivia12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-pvp-enforced-server" />;
}
