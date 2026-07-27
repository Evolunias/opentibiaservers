import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-pvpe-server');
}

export default function Nostalther86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-pvpe-server" />;
}
