import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-54-pvp-enforced-server');
}

export default function Oldera854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-54-pvp-enforced-server" />;
}
