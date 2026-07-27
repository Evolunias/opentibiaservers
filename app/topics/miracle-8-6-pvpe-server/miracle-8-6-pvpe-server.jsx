import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-8-6-pvpe-server');
}

export default function Miracle86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-8-6-pvpe-server" />;
}
