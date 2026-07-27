import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-with-trainers-server');
}

export default function Tibiaretro96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-with-trainers-server" />;
}
