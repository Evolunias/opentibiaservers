import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-pvp-server');
}

export default function Venoreot11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-pvp-server" />;
}
