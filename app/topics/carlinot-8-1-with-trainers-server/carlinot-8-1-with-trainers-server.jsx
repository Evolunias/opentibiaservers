import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-with-trainers-server');
}

export default function Carlinot81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-with-trainers-server" />;
}
