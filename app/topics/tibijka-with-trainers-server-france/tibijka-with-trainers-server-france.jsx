import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-france');
}

export default function TibijkaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-france" />;
}
