import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-pvpe-server');
}

export default function Nostalther80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-pvpe-server" />;
}
