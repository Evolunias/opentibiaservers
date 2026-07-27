import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-usa');
}

export default function OtmadnessWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-usa" />;
}
