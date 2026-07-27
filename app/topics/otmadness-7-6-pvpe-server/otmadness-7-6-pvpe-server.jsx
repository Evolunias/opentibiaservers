import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-pvpe-server');
}

export default function Otmadness76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-pvpe-server" />;
}
