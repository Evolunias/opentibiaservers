import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-pvp-enforced-server');
}

export default function Oldera71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-pvp-enforced-server" />;
}
