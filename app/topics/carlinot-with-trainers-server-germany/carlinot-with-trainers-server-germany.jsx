import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-germany');
}

export default function CarlinotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-germany" />;
}
