import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-pvp-enforced-server');
}

export default function Venoreot13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-pvp-enforced-server" />;
}
