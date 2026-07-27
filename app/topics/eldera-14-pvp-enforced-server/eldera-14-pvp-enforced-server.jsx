import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-pvp-enforced-server');
}

export default function Eldera14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-pvp-enforced-server" />;
}
