import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-pvp-enforced-server');
}

export default function Oldera80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-pvp-enforced-server" />;
}
