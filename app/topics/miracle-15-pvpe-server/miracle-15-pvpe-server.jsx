import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-pvpe-server');
}

export default function Miracle15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-pvpe-server" />;
}
