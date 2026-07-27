import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-pvpe-server');
}

export default function Miracle12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-pvpe-server" />;
}
