import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-poland');
}

export default function CanobWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-poland" />;
}
