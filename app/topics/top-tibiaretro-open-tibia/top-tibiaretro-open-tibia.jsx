import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-open-tibia');
}

export default function TopTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-open-tibia" />;
}
