import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-website');
}

export default function LowrateTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-website" />;
}
