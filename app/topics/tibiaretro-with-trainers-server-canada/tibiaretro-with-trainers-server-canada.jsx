import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-canada');
}

export default function TibiaretroWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-canada" />;
}
