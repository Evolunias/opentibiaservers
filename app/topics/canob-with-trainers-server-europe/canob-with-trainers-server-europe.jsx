import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-europe');
}

export default function CanobWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-europe" />;
}
