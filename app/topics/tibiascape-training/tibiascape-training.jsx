import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-training');
}

export default function TibiascapeTrainingKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-training" />;
}
