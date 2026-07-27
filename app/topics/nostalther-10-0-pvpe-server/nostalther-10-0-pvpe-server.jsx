import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-pvpe-server');
}

export default function Nostalther100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-pvpe-server" />;
}
