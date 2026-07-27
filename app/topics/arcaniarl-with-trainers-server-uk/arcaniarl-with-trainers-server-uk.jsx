import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-uk');
}

export default function ArcaniarlWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-uk" />;
}
