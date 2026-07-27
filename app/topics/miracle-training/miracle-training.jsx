import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-training');
}

export default function MiracleTrainingKeywordPage() {
  return <StaticKeywordPage slug="miracle-training" />;
}
