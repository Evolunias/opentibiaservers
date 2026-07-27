import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-website');
}

export default function ActiveTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-website" />;
}
