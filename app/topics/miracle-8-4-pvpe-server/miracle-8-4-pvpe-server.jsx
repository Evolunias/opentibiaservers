import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-8-4-pvpe-server');
}

export default function Miracle84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-8-4-pvpe-server" />;
}
