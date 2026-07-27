import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-training');
}

export default function NepreniaTrainingKeywordPage() {
  return <StaticKeywordPage slug="neprenia-training" />;
}
