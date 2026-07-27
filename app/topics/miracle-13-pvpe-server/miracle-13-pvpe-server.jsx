import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-13-pvpe-server');
}

export default function Miracle13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-13-pvpe-server" />;
}
