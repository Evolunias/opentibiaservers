import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-argentina');
}

export default function TibiaretroRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-argentina" />;
}
