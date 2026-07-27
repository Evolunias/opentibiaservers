import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-mexico');
}

export default function ThaisotWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-mexico" />;
}
