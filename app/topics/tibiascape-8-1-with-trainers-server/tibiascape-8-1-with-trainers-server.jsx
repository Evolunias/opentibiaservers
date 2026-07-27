import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-with-trainers-server');
}

export default function Tibiascape81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-with-trainers-server" />;
}
