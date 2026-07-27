import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-pvp-server');
}

export default function Venoreot96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-pvp-server" />;
}
