import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-latin-america');
}

export default function TibiaoriginsWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-latin-america" />;
}
