import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-with-trainers-server');
}

export default function Canob84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-with-trainers-server" />;
}
