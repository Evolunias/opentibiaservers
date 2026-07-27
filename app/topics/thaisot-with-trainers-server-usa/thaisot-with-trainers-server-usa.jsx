import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-usa');
}

export default function ThaisotWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-usa" />;
}
