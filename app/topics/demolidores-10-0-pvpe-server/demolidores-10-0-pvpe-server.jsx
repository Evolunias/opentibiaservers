import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-10-0-pvpe-server');
}

export default function Demolidores100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-10-0-pvpe-server" />;
}
