import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-latin-america');
}

export default function TibiaretroWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-latin-america" />;
}
