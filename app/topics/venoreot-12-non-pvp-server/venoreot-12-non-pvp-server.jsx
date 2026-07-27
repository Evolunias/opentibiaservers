import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-non-pvp-server');
}

export default function Venoreot12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-non-pvp-server" />;
}
