import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-mexico');
}

export default function EmpirebrWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-mexico" />;
}
