import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-with-trainers-server');
}

export default function Tibiaretro81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-with-trainers-server" />;
}
