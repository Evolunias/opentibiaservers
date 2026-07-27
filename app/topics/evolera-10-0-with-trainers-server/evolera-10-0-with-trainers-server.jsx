import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-with-trainers-server');
}

export default function Evolera100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-with-trainers-server" />;
}
