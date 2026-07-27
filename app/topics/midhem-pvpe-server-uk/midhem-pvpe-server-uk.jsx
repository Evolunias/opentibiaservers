import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-uk');
}

export default function MidhemPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-uk" />;
}
