import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-training');
}

export default function TibiameTrainingKeywordPage() {
  return <StaticKeywordPage slug="tibiame-training" />;
}
