import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-latin-america');
}

export default function CoxaotWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-latin-america" />;
}
