import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-pvpe-server');
}

export default function Realera76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-pvpe-server" />;
}
