import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-with-trainers-server');
}

export default function Tibiaretro11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-with-trainers-server" />;
}
