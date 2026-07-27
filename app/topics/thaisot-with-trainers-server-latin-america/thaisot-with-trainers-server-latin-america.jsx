import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-latin-america');
}

export default function ThaisotWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-latin-america" />;
}
