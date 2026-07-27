import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-website');
}

export default function NewSeasonTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-website" />;
}
