import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-argentina');
}

export default function MiraclePvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-argentina" />;
}
