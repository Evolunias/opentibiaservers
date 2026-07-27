import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-pvpe-server');
}

export default function Venoreot80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-pvpe-server" />;
}
