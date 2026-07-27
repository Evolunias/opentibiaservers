import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-client');
}

export default function CurrentTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-client" />;
}
