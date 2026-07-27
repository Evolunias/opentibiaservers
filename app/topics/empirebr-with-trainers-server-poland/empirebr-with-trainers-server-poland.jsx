import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-poland');
}

export default function EmpirebrWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-poland" />;
}
