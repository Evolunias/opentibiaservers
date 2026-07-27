import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-with-trainers-server');
}

export default function Tibiaorigins13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-with-trainers-server" />;
}
