import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-pvpe-server');
}

export default function Realera96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-pvpe-server" />;
}
