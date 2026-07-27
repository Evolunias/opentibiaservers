import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-argentina');
}

export default function CanobWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-argentina" />;
}
