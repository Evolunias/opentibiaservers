import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-usa');
}

export default function CanobWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-usa" />;
}
