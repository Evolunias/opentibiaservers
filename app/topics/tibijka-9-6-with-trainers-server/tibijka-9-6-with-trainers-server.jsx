import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-with-trainers-server');
}

export default function Tibijka96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-with-trainers-server" />;
}
