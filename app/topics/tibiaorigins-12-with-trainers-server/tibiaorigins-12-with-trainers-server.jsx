import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-with-trainers-server');
}

export default function Tibiaorigins12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-with-trainers-server" />;
}
