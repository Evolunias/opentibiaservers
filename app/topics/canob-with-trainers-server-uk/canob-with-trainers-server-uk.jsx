import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-uk');
}

export default function CanobWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-uk" />;
}
