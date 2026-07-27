import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-training');
}

export default function NtoStarTrainingKeywordPage() {
  return <StaticKeywordPage slug="nto-star-training" />;
}
