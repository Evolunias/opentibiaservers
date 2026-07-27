import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-pvpe-server');
}

export default function Tibiame84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-pvpe-server" />;
}
