import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-europe');
}

export default function FreshStartStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-europe" />;
}
