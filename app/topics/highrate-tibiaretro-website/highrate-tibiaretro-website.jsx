import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-website');
}

export default function HighrateTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-website" />;
}
