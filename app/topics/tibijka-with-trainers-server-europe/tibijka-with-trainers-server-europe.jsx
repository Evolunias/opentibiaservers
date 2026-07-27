import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-europe');
}

export default function TibijkaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-europe" />;
}
