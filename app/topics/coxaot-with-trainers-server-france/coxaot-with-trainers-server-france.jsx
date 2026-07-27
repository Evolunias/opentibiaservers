import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-france');
}

export default function CoxaotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-france" />;
}
