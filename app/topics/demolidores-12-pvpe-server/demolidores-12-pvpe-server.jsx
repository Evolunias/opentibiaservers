import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-pvpe-server');
}

export default function Demolidores12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-pvpe-server" />;
}
