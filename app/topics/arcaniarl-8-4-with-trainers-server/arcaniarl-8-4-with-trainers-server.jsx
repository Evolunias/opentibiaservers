import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-with-trainers-server');
}

export default function Arcaniarl84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-with-trainers-server" />;
}
