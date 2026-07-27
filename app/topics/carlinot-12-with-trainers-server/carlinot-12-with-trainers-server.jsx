import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-with-trainers-server');
}

export default function Carlinot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-with-trainers-server" />;
}
