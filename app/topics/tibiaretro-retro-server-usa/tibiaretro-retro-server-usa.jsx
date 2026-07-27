import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-usa');
}

export default function TibiaretroRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-usa" />;
}
