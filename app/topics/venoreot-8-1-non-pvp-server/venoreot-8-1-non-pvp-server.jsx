import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-non-pvp-server');
}

export default function Venoreot81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-non-pvp-server" />;
}
