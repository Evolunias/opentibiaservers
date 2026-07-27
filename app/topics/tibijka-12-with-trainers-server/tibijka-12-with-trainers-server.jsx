import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-with-trainers-server');
}

export default function Tibijka12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-with-trainers-server" />;
}
