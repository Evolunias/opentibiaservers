import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-trainers-server-latin-america');
}

export default function RealeraWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-trainers-server-latin-america" />;
}
