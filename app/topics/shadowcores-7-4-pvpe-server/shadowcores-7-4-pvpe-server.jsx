import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-pvpe-server');
}

export default function Shadowcores74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-pvpe-server" />;
}
