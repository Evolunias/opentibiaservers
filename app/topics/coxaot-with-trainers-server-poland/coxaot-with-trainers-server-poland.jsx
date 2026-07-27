import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-poland');
}

export default function CoxaotWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-poland" />;
}
