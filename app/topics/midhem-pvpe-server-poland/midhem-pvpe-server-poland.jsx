import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-poland');
}

export default function MidhemPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-poland" />;
}
