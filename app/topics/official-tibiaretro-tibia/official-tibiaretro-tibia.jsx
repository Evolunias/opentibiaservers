import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-tibia');
}

export default function OfficialTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-tibia" />;
}
