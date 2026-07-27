import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-with-trainers-server');
}

export default function Canob71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-with-trainers-server" />;
}
