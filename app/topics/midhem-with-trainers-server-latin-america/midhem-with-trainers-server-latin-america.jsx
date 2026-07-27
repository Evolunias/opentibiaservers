import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-latin-america');
}

export default function MidhemWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-latin-america" />;
}
