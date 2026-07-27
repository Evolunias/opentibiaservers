import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-pvpe-server');
}

export default function Nostalther13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-pvpe-server" />;
}
