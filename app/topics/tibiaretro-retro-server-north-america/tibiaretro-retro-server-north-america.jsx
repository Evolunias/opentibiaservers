import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-north-america');
}

export default function TibiaretroRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-north-america" />;
}
