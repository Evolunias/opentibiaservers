import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-mexico');
}

export default function TibiantisWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-mexico" />;
}
