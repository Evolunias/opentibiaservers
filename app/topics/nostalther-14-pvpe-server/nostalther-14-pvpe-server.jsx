import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-pvpe-server');
}

export default function Nostalther14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-pvpe-server" />;
}
