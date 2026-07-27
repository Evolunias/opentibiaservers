import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-server');
}

export default function NoResetTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-server" />;
}
