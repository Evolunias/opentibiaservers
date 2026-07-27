import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-argentina');
}

export default function CarlinotWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-argentina" />;
}
