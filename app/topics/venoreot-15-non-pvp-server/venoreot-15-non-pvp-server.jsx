import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-non-pvp-server');
}

export default function Venoreot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-non-pvp-server" />;
}
