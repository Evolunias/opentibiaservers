import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-with-trainers-server');
}

export default function Tibiaretro1098WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-with-trainers-server" />;
}
