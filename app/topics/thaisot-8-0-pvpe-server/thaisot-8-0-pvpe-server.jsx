import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-pvpe-server');
}

export default function Thaisot80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-pvpe-server" />;
}
