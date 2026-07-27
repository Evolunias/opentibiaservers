import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-website');
}

export default function NewTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-website" />;
}
