import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-france');
}

export default function TibiaretroWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-france" />;
}
