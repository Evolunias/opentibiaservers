import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-uk');
}

export default function EmpirebrWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-uk" />;
}
