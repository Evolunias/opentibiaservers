import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-website');
}

export default function TopTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-website" />;
}
