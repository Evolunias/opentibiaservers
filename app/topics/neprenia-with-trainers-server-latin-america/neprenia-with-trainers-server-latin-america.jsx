import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-latin-america');
}

export default function NepreniaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-latin-america" />;
}
