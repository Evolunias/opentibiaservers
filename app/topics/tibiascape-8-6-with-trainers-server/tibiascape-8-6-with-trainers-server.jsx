import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-with-trainers-server');
}

export default function Tibiascape86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-with-trainers-server" />;
}
