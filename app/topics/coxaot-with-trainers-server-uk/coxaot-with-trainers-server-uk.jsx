import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-uk');
}

export default function CoxaotWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-uk" />;
}
