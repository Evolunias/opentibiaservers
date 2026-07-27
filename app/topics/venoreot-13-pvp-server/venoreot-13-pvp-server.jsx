import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-pvp-server');
}

export default function Venoreot13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-pvp-server" />;
}
