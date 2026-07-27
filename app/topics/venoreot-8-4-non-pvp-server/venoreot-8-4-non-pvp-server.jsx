import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-non-pvp-server');
}

export default function Venoreot84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-non-pvp-server" />;
}
