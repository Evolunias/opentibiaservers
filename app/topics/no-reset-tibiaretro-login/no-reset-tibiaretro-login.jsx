import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-login');
}

export default function NoResetTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-login" />;
}
