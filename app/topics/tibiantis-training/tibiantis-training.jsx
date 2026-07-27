import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-training');
}

export default function TibiantisTrainingKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-training" />;
}
