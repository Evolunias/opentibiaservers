import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-north-america');
}

export default function CoxaotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-north-america" />;
}
