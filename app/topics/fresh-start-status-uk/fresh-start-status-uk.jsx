import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-uk');
}

export default function FreshStartStatusUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-uk" />;
}
