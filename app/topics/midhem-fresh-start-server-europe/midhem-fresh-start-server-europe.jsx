import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-europe');
}

export default function MidhemFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-europe" />;
}
