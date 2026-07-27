import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-with-trainers-server');
}

export default function Arcaniarl80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-with-trainers-server" />;
}
