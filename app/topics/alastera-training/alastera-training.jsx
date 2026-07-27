import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-training');
}

export default function AlasteraTrainingKeywordPage() {
  return <StaticKeywordPage slug="alastera-training" />;
}
