import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-with-trainers-server');
}

export default function Tibijka15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-with-trainers-server" />;
}
