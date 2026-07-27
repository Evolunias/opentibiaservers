import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-with-trainers-server');
}

export default function NtoStar14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-with-trainers-server" />;
}
