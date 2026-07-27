import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-pvpe-server');
}

export default function Otmadness11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-pvpe-server" />;
}
