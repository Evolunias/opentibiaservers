import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-4-pvpe-server');
}

export default function Nostalther74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-4-pvpe-server" />;
}
