import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-uk');
}

export default function TibiaretroWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-uk" />;
}
