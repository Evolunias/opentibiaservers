import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-poland');
}

export default function TibiaretroWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-poland" />;
}
