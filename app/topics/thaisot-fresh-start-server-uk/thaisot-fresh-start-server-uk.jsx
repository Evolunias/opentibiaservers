import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-uk');
}

export default function ThaisotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-uk" />;
}
