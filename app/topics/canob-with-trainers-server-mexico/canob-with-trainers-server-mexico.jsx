import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-mexico');
}

export default function CanobWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-mexico" />;
}
