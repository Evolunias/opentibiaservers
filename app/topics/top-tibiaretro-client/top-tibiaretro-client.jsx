import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-client');
}

export default function TopTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-client" />;
}
