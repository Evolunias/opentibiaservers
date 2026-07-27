import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-latin-america');
}

export default function TibiameWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-latin-america" />;
}
