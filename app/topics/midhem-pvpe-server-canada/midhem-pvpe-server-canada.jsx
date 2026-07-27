import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-canada');
}

export default function MidhemPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-canada" />;
}
