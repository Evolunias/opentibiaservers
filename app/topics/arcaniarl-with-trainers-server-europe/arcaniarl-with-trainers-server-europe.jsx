import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-europe');
}

export default function ArcaniarlWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-europe" />;
}
