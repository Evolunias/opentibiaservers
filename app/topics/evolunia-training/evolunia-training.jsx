import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-training');
}

export default function EvoluniaTrainingKeywordPage() {
  return <StaticKeywordPage slug="evolunia-training" />;
}
