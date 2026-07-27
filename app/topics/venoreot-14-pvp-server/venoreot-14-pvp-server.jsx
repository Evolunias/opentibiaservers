import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-pvp-server');
}

export default function Venoreot14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-pvp-server" />;
}
