import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-pvp-enforced-server');
}

export default function Oldera11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-pvp-enforced-server" />;
}
