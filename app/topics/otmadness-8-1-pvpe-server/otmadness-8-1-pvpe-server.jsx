import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-pvpe-server');
}

export default function Otmadness81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-pvpe-server" />;
}
