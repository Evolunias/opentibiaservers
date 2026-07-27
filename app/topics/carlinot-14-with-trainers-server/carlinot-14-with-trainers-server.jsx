import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-with-trainers-server');
}

export default function Carlinot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-with-trainers-server" />;
}
