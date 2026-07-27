import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-training');
}

export default function InfernalOtTrainingKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-training" />;
}
