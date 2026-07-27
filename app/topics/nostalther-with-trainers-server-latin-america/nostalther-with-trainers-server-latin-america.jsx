import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-latin-america');
}

export default function NostaltherWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-latin-america" />;
}
