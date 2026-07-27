import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-north-america');
}

export default function ThaisotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-north-america" />;
}
