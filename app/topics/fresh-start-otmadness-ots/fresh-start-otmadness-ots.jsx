import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-ots');
}

export default function FreshStartOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-ots" />;
}
