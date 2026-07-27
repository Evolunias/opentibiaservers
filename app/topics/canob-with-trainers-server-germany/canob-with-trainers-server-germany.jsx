import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-germany');
}

export default function CanobWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-germany" />;
}
