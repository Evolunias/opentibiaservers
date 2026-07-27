import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-latin-america');
}

export default function TibiantisWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-latin-america" />;
}
