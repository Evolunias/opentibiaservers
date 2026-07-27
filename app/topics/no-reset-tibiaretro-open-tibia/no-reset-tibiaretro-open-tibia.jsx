import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-open-tibia');
}

export default function NoResetTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-open-tibia" />;
}
