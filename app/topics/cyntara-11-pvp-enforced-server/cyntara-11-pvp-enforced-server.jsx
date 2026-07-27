import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-pvp-enforced-server');
}

export default function Cyntara11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-pvp-enforced-server" />;
}
