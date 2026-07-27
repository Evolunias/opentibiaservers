import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-with-trainers-server');
}

export default function Tibiascape80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-with-trainers-server" />;
}
