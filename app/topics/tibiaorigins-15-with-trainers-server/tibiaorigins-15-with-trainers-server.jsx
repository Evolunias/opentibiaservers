import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-with-trainers-server');
}

export default function Tibiaorigins15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-with-trainers-server" />;
}
