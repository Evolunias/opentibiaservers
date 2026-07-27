import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-brazil');
}

export default function MidhemPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-brazil" />;
}
