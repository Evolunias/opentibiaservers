import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-latin-america');
}

export default function TibijkaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-latin-america" />;
}
