import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-with-trainers-server');
}

export default function Tibiaretro13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-with-trainers-server" />;
}
