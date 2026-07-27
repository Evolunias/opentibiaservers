import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-with-trainers-server');
}

export default function Tibijka11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-with-trainers-server" />;
}
