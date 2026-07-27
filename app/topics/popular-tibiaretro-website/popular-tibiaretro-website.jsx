import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-website');
}

export default function PopularTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-website" />;
}
