import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-with-trainers-server');
}

export default function Tibijka76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-with-trainers-server" />;
}
