import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-pvp-enforced-server');
}

export default function Eldera74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-pvp-enforced-server" />;
}
