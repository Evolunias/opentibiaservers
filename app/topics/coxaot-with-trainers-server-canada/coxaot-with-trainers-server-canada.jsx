import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-canada');
}

export default function CoxaotWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-canada" />;
}
