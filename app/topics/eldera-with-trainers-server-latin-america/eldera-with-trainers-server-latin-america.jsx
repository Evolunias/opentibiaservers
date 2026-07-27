import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-latin-america');
}

export default function ElderaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-latin-america" />;
}
