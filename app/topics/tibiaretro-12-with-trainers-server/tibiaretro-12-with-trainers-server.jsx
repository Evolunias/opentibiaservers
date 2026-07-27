import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-with-trainers-server');
}

export default function Tibiaretro12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-with-trainers-server" />;
}
