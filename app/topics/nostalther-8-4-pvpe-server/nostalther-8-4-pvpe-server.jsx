import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-pvpe-server');
}

export default function Nostalther84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-pvpe-server" />;
}
