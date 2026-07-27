import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-with-trainers-server');
}

export default function Tibijka14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-with-trainers-server" />;
}
