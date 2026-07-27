import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-germany');
}

export default function OtmadnessWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-germany" />;
}
