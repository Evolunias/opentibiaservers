import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-pvp-enforced-server');
}

export default function Eldera96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-pvp-enforced-server" />;
}
