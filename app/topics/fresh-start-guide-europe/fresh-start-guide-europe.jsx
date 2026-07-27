import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-europe');
}

export default function FreshStartGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-europe" />;
}
