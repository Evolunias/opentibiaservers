import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-mexico');
}

export default function TibijkaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-mexico" />;
}
