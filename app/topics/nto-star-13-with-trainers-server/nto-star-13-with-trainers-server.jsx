import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-with-trainers-server');
}

export default function NtoStar13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-with-trainers-server" />;
}
