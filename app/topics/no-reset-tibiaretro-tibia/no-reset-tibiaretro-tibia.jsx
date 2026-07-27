import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-tibia');
}

export default function NoResetTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-tibia" />;
}
