import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-pvpe-server');
}

export default function Otmadness86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-pvpe-server" />;
}
