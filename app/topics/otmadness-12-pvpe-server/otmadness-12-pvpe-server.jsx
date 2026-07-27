import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-pvpe-server');
}

export default function Otmadness12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-pvpe-server" />;
}
