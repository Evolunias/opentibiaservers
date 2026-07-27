import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-latin-america');
}

export default function CanobWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-latin-america" />;
}
