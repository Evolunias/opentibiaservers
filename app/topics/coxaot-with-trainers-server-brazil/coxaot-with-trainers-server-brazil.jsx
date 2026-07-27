import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-brazil');
}

export default function CoxaotWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-brazil" />;
}
