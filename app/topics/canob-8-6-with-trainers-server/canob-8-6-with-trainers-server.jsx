import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-with-trainers-server');
}

export default function Canob86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-with-trainers-server" />;
}
