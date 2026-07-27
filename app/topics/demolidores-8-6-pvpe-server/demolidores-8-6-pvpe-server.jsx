import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-8-6-pvpe-server');
}

export default function Demolidores86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-8-6-pvpe-server" />;
}
