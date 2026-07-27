import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-latin-america');
}

export default function KasteriaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-latin-america" />;
}
