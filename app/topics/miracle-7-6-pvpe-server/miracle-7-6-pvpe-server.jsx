import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-7-6-pvpe-server');
}

export default function Miracle76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-7-6-pvpe-server" />;
}
