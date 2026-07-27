import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-training');
}

export default function ArcaniarlTrainingKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-training" />;
}
