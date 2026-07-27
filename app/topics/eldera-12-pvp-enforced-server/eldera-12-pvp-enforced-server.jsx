import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-pvp-enforced-server');
}

export default function Eldera12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-pvp-enforced-server" />;
}
