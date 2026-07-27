import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-with-trainers-server');
}

export default function Tibiascape14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-with-trainers-server" />;
}
