import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-pvp-enforced-server');
}

export default function Eldera15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-pvp-enforced-server" />;
}
