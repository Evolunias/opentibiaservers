import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-pvp-enforced-server');
}

export default function Oldera772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-pvp-enforced-server" />;
}
