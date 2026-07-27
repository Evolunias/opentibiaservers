import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-pvp-enforced-server');
}

export default function Cyntara1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-pvp-enforced-server" />;
}
