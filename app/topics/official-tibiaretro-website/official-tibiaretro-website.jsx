import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-website');
}

export default function OfficialTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-website" />;
}
