import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness');
}

export default function FreshStartOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness" />;
}
