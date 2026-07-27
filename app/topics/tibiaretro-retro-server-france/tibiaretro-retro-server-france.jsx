import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-france');
}

export default function TibiaretroRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-france" />;
}
