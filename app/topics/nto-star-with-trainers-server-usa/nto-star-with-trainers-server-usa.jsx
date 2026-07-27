import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-trainers-server-usa');
}

export default function NtoStarWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-trainers-server-usa" />;
}
