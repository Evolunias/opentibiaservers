import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-europe');
}

export default function ThaisotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-europe" />;
}
