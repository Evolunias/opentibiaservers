import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-4-pvp-server');
}

export default function Venoreot74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-4-pvp-server" />;
}
