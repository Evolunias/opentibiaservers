import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-14-pvpe-server');
}

export default function Demolidores14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-14-pvpe-server" />;
}
