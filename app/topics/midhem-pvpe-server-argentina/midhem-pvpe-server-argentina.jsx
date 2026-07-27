import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-argentina');
}

export default function MidhemPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-argentina" />;
}
