import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-latin-america');
}

export default function AlasteraWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-latin-america" />;
}
