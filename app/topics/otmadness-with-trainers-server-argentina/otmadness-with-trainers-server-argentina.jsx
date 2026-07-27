import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-argentina');
}

export default function OtmadnessWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-argentina" />;
}
