import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-with-trainers-server');
}

export default function Evolera11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-with-trainers-server" />;
}
