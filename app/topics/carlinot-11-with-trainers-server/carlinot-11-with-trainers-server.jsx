import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-with-trainers-server');
}

export default function Carlinot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-with-trainers-server" />;
}
