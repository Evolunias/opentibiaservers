import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-with-trainers-server');
}

export default function Carlinot13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-with-trainers-server" />;
}
