import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-6-pvpe-server');
}

export default function Alastera86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-6-pvpe-server" />;
}
