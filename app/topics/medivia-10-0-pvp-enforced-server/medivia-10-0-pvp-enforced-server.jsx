import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-pvp-enforced-server');
}

export default function Medivia100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-pvp-enforced-server" />;
}
