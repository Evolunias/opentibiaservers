import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-72-pvpe-server');
}

export default function Nostalther772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-72-pvpe-server" />;
}
