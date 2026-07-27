import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-with-trainers-server');
}

export default function Arcaniarl100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-with-trainers-server" />;
}
