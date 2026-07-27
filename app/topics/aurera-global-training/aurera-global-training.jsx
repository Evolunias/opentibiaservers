import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-training');
}

export default function AureraGlobalTrainingKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-training" />;
}
