import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-website');
}

export default function CurrentTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-website" />;
}
