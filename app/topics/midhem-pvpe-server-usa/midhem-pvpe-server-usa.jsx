import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-usa');
}

export default function MidhemPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-usa" />;
}
