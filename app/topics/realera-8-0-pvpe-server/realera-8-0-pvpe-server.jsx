import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-pvpe-server');
}

export default function Realera80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-pvpe-server" />;
}
