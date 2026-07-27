import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-trainers-server-europe');
}

export default function OtmadnessWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-trainers-server-europe" />;
}
