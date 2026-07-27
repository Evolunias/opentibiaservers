import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-with-trainers-server');
}

export default function Tibiascape74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-with-trainers-server" />;
}
