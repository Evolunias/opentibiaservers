import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-latin-america');
}

export default function TibiaretroRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-latin-america" />;
}
