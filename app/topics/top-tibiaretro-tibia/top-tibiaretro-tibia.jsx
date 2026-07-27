import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-tibia');
}

export default function TopTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-tibia" />;
}
