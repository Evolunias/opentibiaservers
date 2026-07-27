import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-with-trainers-server');
}

export default function Canob14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-with-trainers-server" />;
}
