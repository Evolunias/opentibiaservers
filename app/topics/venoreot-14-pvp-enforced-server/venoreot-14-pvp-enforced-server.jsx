import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-pvp-enforced-server');
}

export default function Venoreot14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-pvp-enforced-server" />;
}
