import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-with-trainers-server');
}

export default function NtoStar15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-with-trainers-server" />;
}
