import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-pvpe-server');
}

export default function Empirebr74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-pvpe-server" />;
}
