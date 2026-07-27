import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-france');
}

export default function EmpirebrWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-france" />;
}
