import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-pvpe-server');
}

export default function Alastera11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-pvpe-server" />;
}
