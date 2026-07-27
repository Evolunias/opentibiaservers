import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-tibia');
}

export default function ActiveTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-tibia" />;
}
