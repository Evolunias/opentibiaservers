import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-pvpe-server');
}

export default function Otmadness71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-pvpe-server" />;
}
