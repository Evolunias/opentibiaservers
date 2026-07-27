import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-training');
}

export default function NostaltherTrainingKeywordPage() {
  return <StaticKeywordPage slug="nostalther-training" />;
}
