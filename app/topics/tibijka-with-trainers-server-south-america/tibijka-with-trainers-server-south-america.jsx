import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-south-america');
}

export default function TibijkaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-south-america" />;
}
