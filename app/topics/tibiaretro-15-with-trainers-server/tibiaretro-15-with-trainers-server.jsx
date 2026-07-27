import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-with-trainers-server');
}

export default function Tibiaretro15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-with-trainers-server" />;
}
