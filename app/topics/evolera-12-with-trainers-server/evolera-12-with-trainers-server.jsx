import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-with-trainers-server');
}

export default function Evolera12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-with-trainers-server" />;
}
