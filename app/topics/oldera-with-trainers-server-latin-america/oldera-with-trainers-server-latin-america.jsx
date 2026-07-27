import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-latin-america');
}

export default function OlderaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-latin-america" />;
}
