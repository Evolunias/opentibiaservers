import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-north-america');
}

export default function CanobWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-north-america" />;
}
