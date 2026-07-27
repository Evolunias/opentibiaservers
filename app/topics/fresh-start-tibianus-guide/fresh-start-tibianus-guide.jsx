import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-guide');
}

export default function FreshStartTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-guide" />;
}
