import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-with-trainers-server');
}

export default function Evolera13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-with-trainers-server" />;
}
