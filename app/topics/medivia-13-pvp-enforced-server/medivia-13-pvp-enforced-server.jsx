import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-pvp-enforced-server');
}

export default function Medivia13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-pvp-enforced-server" />;
}
