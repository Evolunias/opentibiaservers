import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-pvpe-server');
}

export default function Nostalther15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-pvpe-server" />;
}
