import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-7-1-pvpe-server');
}

export default function Miracle71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-7-1-pvpe-server" />;
}
