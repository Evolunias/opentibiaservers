import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-poland');
}

export default function MidhemFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-poland" />;
}
