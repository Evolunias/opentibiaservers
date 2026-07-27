import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-poland');
}

export default function OtmadnessWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-poland" />;
}
