import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-pvp-enforced-server');
}

export default function Eldera11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-pvp-enforced-server" />;
}
