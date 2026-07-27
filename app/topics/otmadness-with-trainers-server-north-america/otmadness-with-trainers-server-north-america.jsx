import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-north-america');
}

export default function OtmadnessWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-north-america" />;
}
