import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-website');
}

export default function FreshStartTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-website" />;
}
