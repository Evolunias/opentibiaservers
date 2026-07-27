import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-with-trainers-server');
}

export default function Tibiascape15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-with-trainers-server" />;
}
