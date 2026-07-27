import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-north-america');
}

export default function FreshStartGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-north-america" />;
}
