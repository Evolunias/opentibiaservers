import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-72-pvpe-server');
}

export default function Otmadness772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-72-pvpe-server" />;
}
