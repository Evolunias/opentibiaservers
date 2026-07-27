import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-germany');
}

export default function ThaisotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-germany" />;
}
