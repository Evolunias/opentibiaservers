import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-pvpe-server');
}

export default function Alastera76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-pvpe-server" />;
}
