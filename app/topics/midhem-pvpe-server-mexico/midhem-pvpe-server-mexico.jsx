import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-mexico');
}

export default function MidhemPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-mexico" />;
}
