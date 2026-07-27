import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-pvp-enforced-server');
}

export default function Oldera76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-pvp-enforced-server" />;
}
