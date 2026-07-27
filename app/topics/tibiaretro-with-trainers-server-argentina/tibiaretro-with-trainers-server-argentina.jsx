import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-argentina');
}

export default function TibiaretroWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-argentina" />;
}
