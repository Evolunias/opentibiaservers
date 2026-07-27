import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-training');
}

export default function OxygenotTrainingKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-training" />;
}
