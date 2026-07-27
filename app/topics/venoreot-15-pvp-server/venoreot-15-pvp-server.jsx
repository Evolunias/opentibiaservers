import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-pvp-server');
}

export default function Venoreot15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-pvp-server" />;
}
