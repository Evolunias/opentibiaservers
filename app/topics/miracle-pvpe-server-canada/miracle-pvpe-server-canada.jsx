import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-canada');
}

export default function MiraclePvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-canada" />;
}
