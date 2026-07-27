import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-pvpe-server');
}

export default function Otmadness15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-pvpe-server" />;
}
