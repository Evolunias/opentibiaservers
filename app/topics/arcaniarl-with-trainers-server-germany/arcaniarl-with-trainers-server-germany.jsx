import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-germany');
}

export default function ArcaniarlWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-germany" />;
}
