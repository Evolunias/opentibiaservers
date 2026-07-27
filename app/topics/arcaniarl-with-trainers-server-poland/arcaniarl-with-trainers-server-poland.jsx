import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-poland');
}

export default function ArcaniarlWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-poland" />;
}
