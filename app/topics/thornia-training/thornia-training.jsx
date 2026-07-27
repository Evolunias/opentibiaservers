import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-training');
}

export default function ThorniaTrainingKeywordPage() {
  return <StaticKeywordPage slug="thornia-training" />;
}
