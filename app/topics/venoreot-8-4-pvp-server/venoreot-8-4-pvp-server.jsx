import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-pvp-server');
}

export default function Venoreot84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-pvp-server" />;
}
