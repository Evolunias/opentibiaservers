import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-latin-america');
}

export default function RealestaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-latin-america" />;
}
