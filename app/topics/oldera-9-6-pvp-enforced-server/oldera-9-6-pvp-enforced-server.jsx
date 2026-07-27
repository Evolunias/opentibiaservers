import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-pvp-enforced-server');
}

export default function Oldera96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-pvp-enforced-server" />;
}
