import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-website');
}

export default function CustomTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-website" />;
}
