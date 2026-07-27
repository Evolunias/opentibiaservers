import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-pvpe-server');
}

export default function Venoreot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-pvpe-server" />;
}
