import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-non-pvp-server');
}

export default function Venoreot76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-non-pvp-server" />;
}
