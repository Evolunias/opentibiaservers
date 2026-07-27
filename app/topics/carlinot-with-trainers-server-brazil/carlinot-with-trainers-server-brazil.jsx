import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-brazil');
}

export default function CarlinotWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-brazil" />;
}
