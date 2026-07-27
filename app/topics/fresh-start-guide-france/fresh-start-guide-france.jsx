import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-france');
}

export default function FreshStartGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-france" />;
}
