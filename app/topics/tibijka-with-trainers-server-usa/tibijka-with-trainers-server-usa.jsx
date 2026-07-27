import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-usa');
}

export default function TibijkaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-usa" />;
}
