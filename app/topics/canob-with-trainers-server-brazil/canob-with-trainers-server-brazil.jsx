import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-brazil');
}

export default function CanobWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-brazil" />;
}
