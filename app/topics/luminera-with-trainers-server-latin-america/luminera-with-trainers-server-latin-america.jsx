import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-latin-america');
}

export default function LumineraWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-latin-america" />;
}
