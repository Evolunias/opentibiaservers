import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-pvp-enforced-server');
}

export default function Oldera14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-pvp-enforced-server" />;
}
