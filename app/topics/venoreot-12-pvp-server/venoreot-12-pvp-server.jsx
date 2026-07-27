import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-pvp-server');
}

export default function Venoreot12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-pvp-server" />;
}
