import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-1-pvpe-server');
}

export default function Venoreot71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-1-pvpe-server" />;
}
