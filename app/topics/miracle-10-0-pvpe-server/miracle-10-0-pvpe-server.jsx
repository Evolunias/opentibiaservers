import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-10-0-pvpe-server');
}

export default function Miracle100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-10-0-pvpe-server" />;
}
