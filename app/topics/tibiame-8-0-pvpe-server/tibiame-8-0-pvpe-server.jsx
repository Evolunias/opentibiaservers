import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-pvpe-server');
}

export default function Tibiame80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-pvpe-server" />;
}
