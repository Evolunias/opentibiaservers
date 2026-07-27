import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-brazil');
}

export default function OtmadnessWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-brazil" />;
}
