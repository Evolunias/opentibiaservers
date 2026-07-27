import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-with-trainers-server');
}

export default function Evolera76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-with-trainers-server" />;
}
