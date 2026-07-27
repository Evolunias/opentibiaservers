import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-north-america');
}

export default function CarlinotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-north-america" />;
}
