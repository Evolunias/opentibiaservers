import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-trainers-server-latin-america');
}

export default function NtoStarWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-trainers-server-latin-america" />;
}
