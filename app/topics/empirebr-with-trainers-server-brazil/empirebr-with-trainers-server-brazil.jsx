import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-brazil');
}

export default function EmpirebrWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-brazil" />;
}
