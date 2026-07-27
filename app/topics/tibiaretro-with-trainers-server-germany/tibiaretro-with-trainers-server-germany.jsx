import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-germany');
}

export default function TibiaretroWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-germany" />;
}
