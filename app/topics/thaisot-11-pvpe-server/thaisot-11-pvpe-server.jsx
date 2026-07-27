import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-pvpe-server');
}

export default function Thaisot11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-pvpe-server" />;
}
