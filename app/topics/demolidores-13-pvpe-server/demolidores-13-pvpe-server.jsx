import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-pvpe-server');
}

export default function Demolidores13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-pvpe-server" />;
}
