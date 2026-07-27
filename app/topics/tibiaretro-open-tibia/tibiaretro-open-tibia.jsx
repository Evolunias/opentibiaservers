import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-open-tibia');
}

export default function TibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-open-tibia" />;
}
