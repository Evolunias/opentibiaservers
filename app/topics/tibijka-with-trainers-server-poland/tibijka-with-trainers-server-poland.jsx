import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-poland');
}

export default function TibijkaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-poland" />;
}
