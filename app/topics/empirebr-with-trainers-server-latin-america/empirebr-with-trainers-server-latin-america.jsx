import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-latin-america');
}

export default function EmpirebrWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-latin-america" />;
}
