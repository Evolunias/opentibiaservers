import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-training');
}

export default function KasteriaTrainingKeywordPage() {
  return <StaticKeywordPage slug="kasteria-training" />;
}
