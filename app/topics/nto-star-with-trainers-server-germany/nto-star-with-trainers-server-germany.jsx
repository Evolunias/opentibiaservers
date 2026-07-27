import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-trainers-server-germany');
}

export default function NtoStarWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-trainers-server-germany" />;
}
