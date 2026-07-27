import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-8-1-pvpe-server');
}

export default function Demolidores81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-8-1-pvpe-server" />;
}
