import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-training');
}

export default function BlazeraTrainingKeywordPage() {
  return <StaticKeywordPage slug="blazera-training" />;
}
