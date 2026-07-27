import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-with-trainers-server');
}

export default function Arcaniarl11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-with-trainers-server" />;
}
