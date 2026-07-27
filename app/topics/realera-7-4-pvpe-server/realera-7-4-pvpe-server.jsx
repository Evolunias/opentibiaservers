import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-pvpe-server');
}

export default function Realera74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-pvpe-server" />;
}
