import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-pvp-enforced-server');
}

export default function Cyntara96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-pvp-enforced-server" />;
}
