import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-pvpe-server');
}

export default function Venoreot84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-pvpe-server" />;
}
