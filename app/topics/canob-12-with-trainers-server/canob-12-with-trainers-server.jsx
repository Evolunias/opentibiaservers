import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-with-trainers-server');
}

export default function Canob12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-with-trainers-server" />;
}
