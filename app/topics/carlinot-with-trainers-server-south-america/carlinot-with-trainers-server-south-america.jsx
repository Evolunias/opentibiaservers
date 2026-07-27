import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-south-america');
}

export default function CarlinotWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-south-america" />;
}
