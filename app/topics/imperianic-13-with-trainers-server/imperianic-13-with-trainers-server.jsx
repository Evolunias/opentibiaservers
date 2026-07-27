import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-with-trainers-server');
}

export default function Imperianic13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-with-trainers-server" />;
}
