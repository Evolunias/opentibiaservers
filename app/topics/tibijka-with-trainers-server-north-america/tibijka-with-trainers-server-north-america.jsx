import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-north-america');
}

export default function TibijkaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-north-america" />;
}
