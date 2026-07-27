import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-usa');
}

export default function EmpirebrWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-usa" />;
}
