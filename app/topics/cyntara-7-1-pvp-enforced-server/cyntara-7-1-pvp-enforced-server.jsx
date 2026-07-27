import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-pvp-enforced-server');
}

export default function Cyntara71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-pvp-enforced-server" />;
}
