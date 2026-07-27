import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-pvp-enforced-server');
}

export default function Oldera1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-pvp-enforced-server" />;
}
