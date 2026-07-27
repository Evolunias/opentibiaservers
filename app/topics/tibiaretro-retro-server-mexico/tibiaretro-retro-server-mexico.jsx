import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-mexico');
}

export default function TibiaretroRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-mexico" />;
}
