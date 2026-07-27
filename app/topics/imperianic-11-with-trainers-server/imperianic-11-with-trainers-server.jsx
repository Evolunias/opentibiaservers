import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-with-trainers-server');
}

export default function Imperianic11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-with-trainers-server" />;
}
