import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-non-pvp-server');
}

export default function Venoreot96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-non-pvp-server" />;
}
