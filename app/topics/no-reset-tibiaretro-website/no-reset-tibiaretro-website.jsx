import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-website');
}

export default function NoResetTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-website" />;
}
