import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-pvpe-server');
}

export default function Realera14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-pvpe-server" />;
}
