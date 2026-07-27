import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-pvpe-server');
}

export default function Realera100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-pvpe-server" />;
}
