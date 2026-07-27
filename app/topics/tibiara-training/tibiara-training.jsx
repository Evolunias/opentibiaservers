import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-training');
}

export default function TibiaraTrainingKeywordPage() {
  return <StaticKeywordPage slug="tibiara-training" />;
}
