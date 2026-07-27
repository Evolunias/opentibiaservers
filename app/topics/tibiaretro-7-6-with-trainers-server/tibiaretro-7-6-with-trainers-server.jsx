import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-with-trainers-server');
}

export default function Tibiaretro76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-with-trainers-server" />;
}
