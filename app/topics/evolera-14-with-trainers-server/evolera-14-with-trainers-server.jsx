import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-with-trainers-server');
}

export default function Evolera14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-with-trainers-server" />;
}
