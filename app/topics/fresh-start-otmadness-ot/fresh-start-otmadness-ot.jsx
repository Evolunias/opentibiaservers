import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-ot');
}

export default function FreshStartOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-ot" />;
}
