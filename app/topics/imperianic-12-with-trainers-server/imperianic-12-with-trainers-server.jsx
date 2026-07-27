import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-with-trainers-server');
}

export default function Imperianic12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-with-trainers-server" />;
}
