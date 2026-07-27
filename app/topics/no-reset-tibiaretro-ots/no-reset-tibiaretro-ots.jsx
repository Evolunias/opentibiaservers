import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-ots');
}

export default function NoResetTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-ots" />;
}
