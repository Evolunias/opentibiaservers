import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-training');
}

export default function EmpirebrTrainingKeywordPage() {
  return <StaticKeywordPage slug="empirebr-training" />;
}
