import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-pvpe-server');
}

export default function Nostalther11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-pvpe-server" />;
}
