import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-pvp-server');
}

export default function Venoreot100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-pvp-server" />;
}
