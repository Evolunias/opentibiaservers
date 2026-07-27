import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-canada');
}

export default function MidhemFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-canada" />;
}
