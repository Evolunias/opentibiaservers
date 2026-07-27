import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-pvpe-server');
}

export default function Venoreot81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-pvpe-server" />;
}
