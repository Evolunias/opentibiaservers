import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-with-trainers-server');
}

export default function Tibiaretro14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-with-trainers-server" />;
}
