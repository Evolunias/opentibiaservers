import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-pvpe-server');
}

export default function Alastera1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-pvpe-server" />;
}
