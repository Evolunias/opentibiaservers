import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-98-non-pvp-server');
}

export default function Venoreot1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-98-non-pvp-server" />;
}
