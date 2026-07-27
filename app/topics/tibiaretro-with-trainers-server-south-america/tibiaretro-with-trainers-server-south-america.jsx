import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-south-america');
}

export default function TibiaretroWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-south-america" />;
}
