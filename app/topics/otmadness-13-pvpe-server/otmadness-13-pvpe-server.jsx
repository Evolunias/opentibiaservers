import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-pvpe-server');
}

export default function Otmadness13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-pvpe-server" />;
}
