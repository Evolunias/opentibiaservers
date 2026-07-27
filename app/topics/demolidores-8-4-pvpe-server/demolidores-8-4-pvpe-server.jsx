import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-8-4-pvpe-server');
}

export default function Demolidores84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-8-4-pvpe-server" />;
}
