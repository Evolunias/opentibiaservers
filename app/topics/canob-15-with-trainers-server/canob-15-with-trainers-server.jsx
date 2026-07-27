import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-with-trainers-server');
}

export default function Canob15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-with-trainers-server" />;
}
