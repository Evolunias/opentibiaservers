import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-11-pvpe-server');
}

export default function Demolidores11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-11-pvpe-server" />;
}
