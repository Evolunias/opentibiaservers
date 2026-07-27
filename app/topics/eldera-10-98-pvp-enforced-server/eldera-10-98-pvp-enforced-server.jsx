import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-pvp-enforced-server');
}

export default function Eldera1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-pvp-enforced-server" />;
}
