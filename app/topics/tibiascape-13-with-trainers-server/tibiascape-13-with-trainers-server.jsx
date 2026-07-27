import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-with-trainers-server');
}

export default function Tibiascape13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-with-trainers-server" />;
}
