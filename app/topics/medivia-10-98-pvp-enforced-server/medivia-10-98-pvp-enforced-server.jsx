import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-pvp-enforced-server');
}

export default function Medivia1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-pvp-enforced-server" />;
}
