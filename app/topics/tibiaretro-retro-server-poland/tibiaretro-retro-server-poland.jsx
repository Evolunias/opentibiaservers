import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-poland');
}

export default function TibiaretroRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-poland" />;
}
