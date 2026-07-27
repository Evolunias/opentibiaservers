import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-mexico');
}

export default function TibiaretroWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-mexico" />;
}
