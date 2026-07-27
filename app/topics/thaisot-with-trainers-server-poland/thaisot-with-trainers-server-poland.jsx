import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-poland');
}

export default function ThaisotWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-poland" />;
}
