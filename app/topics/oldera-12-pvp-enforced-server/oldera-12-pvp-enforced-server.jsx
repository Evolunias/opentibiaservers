import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-pvp-enforced-server');
}

export default function Oldera12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-pvp-enforced-server" />;
}
