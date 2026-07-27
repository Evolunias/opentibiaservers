import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-with-trainers-server');
}

export default function Arcaniarl76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-with-trainers-server" />;
}
