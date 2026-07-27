import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-pvpe-server');
}

export default function Nostalther12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-pvpe-server" />;
}
