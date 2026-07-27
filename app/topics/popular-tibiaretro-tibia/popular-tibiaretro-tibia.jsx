import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-tibia');
}

export default function PopularTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-tibia" />;
}
