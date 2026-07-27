import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-pvpe-server');
}

export default function Otmadness74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-pvpe-server" />;
}
