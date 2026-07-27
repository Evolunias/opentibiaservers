import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-argentina');
}

export default function CoxaotWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-argentina" />;
}
