import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-south-america');
}

export default function CanobWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-south-america" />;
}
