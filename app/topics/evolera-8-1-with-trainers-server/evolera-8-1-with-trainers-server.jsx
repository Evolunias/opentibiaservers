import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-with-trainers-server');
}

export default function Evolera81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-with-trainers-server" />;
}
