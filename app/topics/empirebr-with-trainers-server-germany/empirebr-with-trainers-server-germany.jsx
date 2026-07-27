import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-germany');
}

export default function EmpirebrWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-germany" />;
}
