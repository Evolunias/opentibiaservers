import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-website');
}

export default function TibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-website" />;
}
