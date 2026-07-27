import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-pvp-enforced-server');
}

export default function Medivia76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-pvp-enforced-server" />;
}
