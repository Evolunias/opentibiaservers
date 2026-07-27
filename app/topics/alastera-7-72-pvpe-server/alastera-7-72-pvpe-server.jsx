import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-pvpe-server');
}

export default function Alastera772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-pvpe-server" />;
}
