import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-pvp-enforced-server');
}

export default function Medivia96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-pvp-enforced-server" />;
}
