import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-6-pvpe-server');
}

export default function Nostalther76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-6-pvpe-server" />;
}
