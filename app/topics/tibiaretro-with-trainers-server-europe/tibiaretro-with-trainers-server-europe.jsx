import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-europe');
}

export default function TibiaretroWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-europe" />;
}
