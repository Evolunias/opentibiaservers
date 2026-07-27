import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-training');
}

export default function TibiaoriginsTrainingKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-training" />;
}
