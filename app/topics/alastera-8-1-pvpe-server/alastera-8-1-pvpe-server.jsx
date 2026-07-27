import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-pvpe-server');
}

export default function Alastera81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-pvpe-server" />;
}
