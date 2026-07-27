import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-uk');
}

export default function TibijkaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-uk" />;
}
