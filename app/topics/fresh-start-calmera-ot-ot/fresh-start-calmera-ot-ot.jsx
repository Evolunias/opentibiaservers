import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-ot');
}

export default function FreshStartCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-ot" />;
}
