import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-with-trainers-server');
}

export default function Tibiascape76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-with-trainers-server" />;
}
