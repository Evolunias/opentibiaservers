import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-pvp-enforced-server');
}

export default function Cyntara84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-pvp-enforced-server" />;
}
