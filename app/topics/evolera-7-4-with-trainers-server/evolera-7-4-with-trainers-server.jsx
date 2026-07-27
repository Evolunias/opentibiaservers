import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-with-trainers-server');
}

export default function Evolera74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-with-trainers-server" />;
}
