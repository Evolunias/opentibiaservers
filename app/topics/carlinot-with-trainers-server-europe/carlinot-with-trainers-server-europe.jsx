import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-europe');
}

export default function CarlinotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-europe" />;
}
