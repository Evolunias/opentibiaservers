import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-germany');
}

export default function MidhemFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-germany" />;
}
