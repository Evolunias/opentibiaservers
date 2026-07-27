import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-training');
}

export default function ImperianicTrainingKeywordPage() {
  return <StaticKeywordPage slug="imperianic-training" />;
}
