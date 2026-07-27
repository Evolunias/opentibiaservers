import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-with-trainers-server');
}

export default function Tibiascape11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-with-trainers-server" />;
}
