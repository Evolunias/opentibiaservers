import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-with-trainers-server');
}

export default function Tibiaorigins14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-with-trainers-server" />;
}
