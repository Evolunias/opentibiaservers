import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-europe');
}

export default function MidhemPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-europe" />;
}
