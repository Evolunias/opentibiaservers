import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-with-trainers-server');
}

export default function Tibijka81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-with-trainers-server" />;
}
