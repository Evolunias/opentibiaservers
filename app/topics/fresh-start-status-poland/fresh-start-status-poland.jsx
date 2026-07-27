import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-poland');
}

export default function FreshStartStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-poland" />;
}
