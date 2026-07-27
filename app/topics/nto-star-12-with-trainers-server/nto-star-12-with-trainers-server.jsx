import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-with-trainers-server');
}

export default function NtoStar12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-with-trainers-server" />;
}
