import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-client');
}

export default function NoResetTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-client" />;
}
