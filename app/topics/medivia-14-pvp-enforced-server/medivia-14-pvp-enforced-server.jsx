import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-pvp-enforced-server');
}

export default function Medivia14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-pvp-enforced-server" />;
}
