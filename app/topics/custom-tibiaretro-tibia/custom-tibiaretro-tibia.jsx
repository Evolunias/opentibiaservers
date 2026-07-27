import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-tibia');
}

export default function CustomTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-tibia" />;
}
