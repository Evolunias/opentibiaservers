import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-ot');
}

export default function NewOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-ot" />;
}
