import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-website');
}

export default function BestTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-website" />;
}
