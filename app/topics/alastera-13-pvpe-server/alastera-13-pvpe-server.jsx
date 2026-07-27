import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-pvpe-server');
}

export default function Alastera13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-pvpe-server" />;
}
