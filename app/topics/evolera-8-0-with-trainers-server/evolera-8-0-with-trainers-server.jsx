import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-with-trainers-server');
}

export default function Evolera80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-with-trainers-server" />;
}
