import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-pvpe-server');
}

export default function Alastera84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-pvpe-server" />;
}
