import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-pvp-enforced-server');
}

export default function Cyntara13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-pvp-enforced-server" />;
}
