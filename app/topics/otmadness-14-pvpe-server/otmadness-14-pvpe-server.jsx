import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-pvpe-server');
}

export default function Otmadness14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-pvpe-server" />;
}
