import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-with-trainers-server');
}

export default function NtoStar11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-with-trainers-server" />;
}
