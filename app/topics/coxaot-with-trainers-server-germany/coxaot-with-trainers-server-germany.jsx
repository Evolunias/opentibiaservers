import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-germany');
}

export default function CoxaotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-germany" />;
}
