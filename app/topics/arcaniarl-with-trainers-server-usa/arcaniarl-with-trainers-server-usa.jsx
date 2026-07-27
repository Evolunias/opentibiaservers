import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-usa');
}

export default function ArcaniarlWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-usa" />;
}
