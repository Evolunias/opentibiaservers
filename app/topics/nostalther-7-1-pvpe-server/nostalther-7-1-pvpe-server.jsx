import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-pvpe-server');
}

export default function Nostalther71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-pvpe-server" />;
}
