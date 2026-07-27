import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-non-pvp-server');
}

export default function Venoreot13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-non-pvp-server" />;
}
