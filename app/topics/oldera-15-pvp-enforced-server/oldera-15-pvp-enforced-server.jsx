import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-pvp-enforced-server');
}

export default function Oldera15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-pvp-enforced-server" />;
}
