import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-open-tibia');
}

export default function OfficialTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-open-tibia" />;
}
