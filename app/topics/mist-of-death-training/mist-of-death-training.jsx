import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-training');
}

export default function MistOfDeathTrainingKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-training" />;
}
