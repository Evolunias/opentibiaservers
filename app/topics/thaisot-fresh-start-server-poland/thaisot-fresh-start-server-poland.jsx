import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-poland');
}

export default function ThaisotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-poland" />;
}
