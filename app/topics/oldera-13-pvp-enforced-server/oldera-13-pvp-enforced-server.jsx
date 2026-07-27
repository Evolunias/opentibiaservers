import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-pvp-enforced-server');
}

export default function Oldera13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-pvp-enforced-server" />;
}
