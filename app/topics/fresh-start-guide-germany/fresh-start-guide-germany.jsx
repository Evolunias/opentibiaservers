import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-germany');
}

export default function FreshStartGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-germany" />;
}
