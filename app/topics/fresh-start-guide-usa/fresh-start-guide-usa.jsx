import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-usa');
}

export default function FreshStartGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-usa" />;
}
