import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-pvpe-server');
}

export default function Alastera14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-pvpe-server" />;
}
