import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-with-trainers-server');
}

export default function Canob11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-with-trainers-server" />;
}
