import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-client');
}

export default function LowrateTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-client" />;
}
