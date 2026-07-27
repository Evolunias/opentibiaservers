import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-poland');
}

export default function FreshStartGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-poland" />;
}
