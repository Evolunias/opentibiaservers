import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-latin-america');
}

export default function TibiascapeWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-latin-america" />;
}
