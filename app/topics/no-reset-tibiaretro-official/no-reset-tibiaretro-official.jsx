import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-official');
}

export default function NoResetTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-official" />;
}
