import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-pvpe-server');
}

export default function Otmadness84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-pvpe-server" />;
}
