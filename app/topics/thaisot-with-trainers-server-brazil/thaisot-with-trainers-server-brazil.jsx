import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-brazil');
}

export default function ThaisotWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-brazil" />;
}
