import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-mexico');
}

export default function FreshStartGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-mexico" />;
}
