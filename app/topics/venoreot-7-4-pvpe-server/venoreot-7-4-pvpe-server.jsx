import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-4-pvpe-server');
}

export default function Venoreot74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-4-pvpe-server" />;
}
