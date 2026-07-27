import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-training');
}

export default function CoxaotTrainingKeywordPage() {
  return <StaticKeywordPage slug="coxaot-training" />;
}
