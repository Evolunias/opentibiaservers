import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-trainers-server-uk');
}

export default function NtoStarWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-trainers-server-uk" />;
}
