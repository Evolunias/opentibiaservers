import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-7-1-pvpe-server');
}

export default function Demolidores71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-7-1-pvpe-server" />;
}
