import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-with-trainers-server');
}

export default function Imperianic15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-with-trainers-server" />;
}
