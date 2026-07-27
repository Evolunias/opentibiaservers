import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-latin-america');
}

export default function TibianusWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-latin-america" />;
}
