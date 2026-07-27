import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro');
}

export default function NoResetTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro" />;
}
