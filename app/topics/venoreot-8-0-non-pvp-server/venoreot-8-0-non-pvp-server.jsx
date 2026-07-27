import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-non-pvp-server');
}

export default function Venoreot80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-non-pvp-server" />;
}
