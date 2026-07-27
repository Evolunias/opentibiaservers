import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-europe');
}

export default function EmpirebrWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-europe" />;
}
