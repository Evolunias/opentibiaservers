import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot');
}

export default function FreshStartCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot" />;
}
