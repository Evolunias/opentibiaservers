import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-pvp-enforced-server');
}

export default function Cyntara14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-pvp-enforced-server" />;
}
