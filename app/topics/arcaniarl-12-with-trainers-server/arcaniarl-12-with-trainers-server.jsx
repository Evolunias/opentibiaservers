import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-with-trainers-server');
}

export default function Arcaniarl12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-with-trainers-server" />;
}
