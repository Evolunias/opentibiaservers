import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-pvpe-server');
}

export default function Venoreot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-pvpe-server" />;
}
