import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-training');
}

export default function SerenityTrainingKeywordPage() {
  return <StaticKeywordPage slug="serenity-training" />;
}
