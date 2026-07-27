import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-germany');
}

export default function TibijkaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-germany" />;
}
