import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-open-tibia');
}

export default function PopularTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-open-tibia" />;
}
