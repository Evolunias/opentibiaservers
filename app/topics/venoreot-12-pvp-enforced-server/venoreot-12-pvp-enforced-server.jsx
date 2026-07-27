import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-pvp-enforced-server');
}

export default function Venoreot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-pvp-enforced-server" />;
}
