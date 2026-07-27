import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-with-trainers-server');
}

export default function Arcaniarl96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-with-trainers-server" />;
}
