import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-pvpe-server');
}

export default function Demolidores15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-pvpe-server" />;
}
