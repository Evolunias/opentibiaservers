import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-with-trainers-server');
}

export default function Tibijka13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-with-trainers-server" />;
}
