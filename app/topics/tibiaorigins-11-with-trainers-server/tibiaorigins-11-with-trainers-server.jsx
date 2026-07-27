import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-with-trainers-server');
}

export default function Tibiaorigins11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-with-trainers-server" />;
}
