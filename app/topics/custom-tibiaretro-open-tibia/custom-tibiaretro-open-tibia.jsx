import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-open-tibia');
}

export default function CustomTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-open-tibia" />;
}
