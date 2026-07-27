import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-sweden');
}

export default function CanobWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-sweden" />;
}
