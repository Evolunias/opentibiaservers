import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-open-tibia');
}

export default function ActiveTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-open-tibia" />;
}
