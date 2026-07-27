import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-trainers-server-europe');
}

export default function NtoStarWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-trainers-server-europe" />;
}
