import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-pvpe-server');
}

export default function Alastera15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-pvpe-server" />;
}
