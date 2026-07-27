import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-canada');
}

export default function TibiaretroRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-canada" />;
}
