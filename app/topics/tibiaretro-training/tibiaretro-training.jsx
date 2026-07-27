import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-training');
}

export default function TibiaretroTrainingKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-training" />;
}
