import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-pvpe-server');
}

export default function Otmadness96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-pvpe-server" />;
}
