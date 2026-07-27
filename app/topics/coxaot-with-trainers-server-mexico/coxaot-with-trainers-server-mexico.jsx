import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-mexico');
}

export default function CoxaotWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-mexico" />;
}
