import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-non-pvp-server');
}

export default function Venoreot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-non-pvp-server" />;
}
