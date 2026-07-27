import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-uk');
}

export default function TibiaretroRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-uk" />;
}
