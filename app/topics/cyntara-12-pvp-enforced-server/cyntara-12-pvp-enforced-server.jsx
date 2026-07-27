import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-pvp-enforced-server');
}

export default function Cyntara12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-pvp-enforced-server" />;
}
