import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-pvpe-server');
}

export default function Alastera96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-pvpe-server" />;
}
