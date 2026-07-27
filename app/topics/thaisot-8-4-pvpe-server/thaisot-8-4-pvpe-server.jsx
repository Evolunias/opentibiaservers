import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-pvpe-server');
}

export default function Thaisot84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-pvpe-server" />;
}
