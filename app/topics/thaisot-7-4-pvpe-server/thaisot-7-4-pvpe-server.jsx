import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-pvpe-server');
}

export default function Thaisot74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-pvpe-server" />;
}
