import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-europe');
}

export default function ThaisotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-europe" />;
}
